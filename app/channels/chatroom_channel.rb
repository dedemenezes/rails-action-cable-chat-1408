class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    # debugger
    # stream_from "some_channel"
    # We should broadcast to the Chatroom where the message was created!
    # 1. find the right chatroom
    chatroom = Chatroom.find(params[:roomId])
    # 2. broadcast to the specific chatroom
    stream_for chatroom
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
