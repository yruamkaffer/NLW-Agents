import { useForm } from "react-hook-form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const createRoomSchema = z.object({
	name: z.string().min(3, { message: "Inclua no mínimo 3 caracteres." }),
	description: z.string(),
});

type CreateRoomFormData = z.infer<typeof createRoomSchema>;

export function CreateRoomForm() {
	const createRoomForm = useForm<CreateRoomFormData>({
		resolver: zodResolver(createRoomSchema),
		defaultValues: {
			name: "",
			description: "",
		},
	});

	function handleCreateRoom(data: CreateRoomFormData) {
		console.log(data);
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Criar sala</CardTitle>
				<CardDescription>
					Crie uma nova sala para começar a fazer perguntas e receber respostas
					da IA
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...createRoomForm}>
					<form
						onSubmit={createRoomForm.handleSubmit(handleCreateRoom)}
						className="flex flex-col gap-4"
					>
						<FormField
							control={createRoomForm.control}
							name="name"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>Nome da sala</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="Digite o nome da sala..."
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								);
							}}
						/>

						<FormField
							control={createRoomForm.control}
							name="description"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>Descrição</FormLabel>
										<FormControl>
											<Textarea {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								);
							}}
						/>

						<Button type="submit" className="w-full">
							Criar sala
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
