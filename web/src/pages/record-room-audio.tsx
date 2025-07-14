import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

const isRecordingSupported =
	!!navigator.mediaDevices &&
	typeof navigator.mediaDevices.getUserMedia === "function" &&
	typeof window.MediaRecorder === "function";

type RoomParams = {
	roomId: string;
};

export function RecordRoomAudio() {
	const params = useParams<RoomParams>();

	const [isRecording, setIsRecording] = useState(false);
	const recorder = useRef<MediaRecorder | null>(null);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	function stopRecording() {
		setIsRecording(false);

		if (recorder.current && recorder.current.state !== "inactive") {
			recorder.current.stop();
		}

		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
	}

	async function uploadAudio(audio: Blob) {
		const formData = new FormData();

		formData.append("file", audio, "audio.webm");

		const response = await fetch(
			`http://localhost:3333/rooms/${params.roomId}/audio`,
			{
				method: "POST",
				body: formData,
			},
		);

		const result = await response.json();
	}

	function createRecorder(audio: MediaStream) {
		recorder.current = new MediaRecorder(audio, {
			mimeType: "audio/webm",
			audioBitsPerSecond: 64_000,
		});

		recorder.current.ondataavailable = (event) => {
			if (event.data.size > 0) {
				uploadAudio(event.data);
			}
		};

		recorder.current.onstart = () => {
			console.log("Gravação iniciada!");
		};

		recorder.current.onstop = () => {
			console.log("Gravação encerrada/pausada");
		};

		recorder.current.start();
	}

	async function startRecording() {
		if (!isRecordingSupported) {
			alert("Seu navegador não suporta gravação");
			return;
		}
		setIsRecording(true);

		const audio = await navigator.mediaDevices.getUserMedia({
			audio: {
				echoCancellation: true,
				noiseSuppression: true,
				sampleRate: 44_100,
			},
		});

		createRecorder(audio);

		intervalRef.current = setInterval(() => {
			recorder.current?.stop();
			createRecorder(audio);
		}, 5000);
	}

	if (!params.roomId) {
		return <Navigate replace to="/" />;
	}

	return (
		<div>
		<div className="mb-4 flex items-center justify-between mt-4 ml-4">
						<Link to={`/room/${params.roomId}`}>
							<Button variant="outline">
								<ArrowLeft className="mr-2 size-4" />
								Voltar a Sala de perguntas
							</Button>
						</Link>
						
					</div>

		<div className="gap-3 flex-col h-screen flex items-center justify-center">
			{isRecording ? (
				<Button onClick={stopRecording}>Parar gravação</Button>
			) : (
				<Button onClick={startRecording}>Gravar áudio</Button>
			)}
			{isRecording ? <p>Gravando ...</p> : <p>Pausado</p>}
		</div>
		</div>
	);
}
