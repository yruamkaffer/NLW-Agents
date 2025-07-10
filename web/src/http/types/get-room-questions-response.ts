export type GetRoomQuestionsResponse = Array<{
	id: string;
	questions: string;
	answer: string | null;
	createdAt: string;
}>;
