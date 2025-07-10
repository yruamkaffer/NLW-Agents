import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecordRoomAudio } from "./pages/record-room-audio";

const queryClient = new QueryClient();

export function App() {
	return (
		<div>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Routes>
						<Route index element={<CreateRoom />} />
						<Route path="/room/:roomId" element={<Room />} />
						<Route path="/room/:roomId/audio" element={<RecordRoomAudio />} />
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</div>
	);
}
