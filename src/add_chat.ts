/*                             ADD_CHAT.TS
  Implements the logic to create chat messages in the database
*/
import { message_model } from "./models/message"

export default async (data: any) => {
    if (data.chat !== 'General') {
        const chat_messages = await message_model.find({ chat: data.chat });
        const chat_exists = chat_messages.length > 0;
        data.original_poster = !chat_exists;
    } else {
        data.original_poster = false;
    }
    const message = new message_model({
        board: data.board,
        name: data.name,
        body: data.body,
        chat: data.chat,
        post_id: data.post_id,
        image: null,
        image_filename: null,
        image_filesize: null,
        image_width: null,
        image_height: null,
        thumb: null,
        date: data.date,
        original_poster: data.original_poster,
    });

    await message.save();

    // TODO Delete older messages based on max history length in config
}