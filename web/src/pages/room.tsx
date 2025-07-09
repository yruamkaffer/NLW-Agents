import { Navigate, useParams } from "react-router-dom"

type RoomParams = {
    roomId: string
}

export function Room() {
    const params = useParams<RoomParams>()

    if (!params.roomId) {
        return <Navigate to="/" replace/>
    }

    return <div>Create Details</div>
}