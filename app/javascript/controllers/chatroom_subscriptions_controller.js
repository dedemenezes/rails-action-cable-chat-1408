import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable";

// Connects to data-controller="chatroom-subscriptions"
export default class extends Controller {
  static targets = ["messagesContainer"]
  static values = {
    chatroomId: Number
  }
  connect() {
    // console.log('Hello from Chatroom Subscriptions controller')
    console.log(this.chatroomIdValue)
    // console.log('NOw we need to subscribe the user!')
    createConsumer().subscriptions.create(
      { channel: "ChatroomChannel", roomId: this.chatroomIdValue },
      { received: (data) => {
        console.log(data);
        // 1. insert the new message created into the messages container
        this.messagesContainerTarget.insertAdjacentHTML('beforeend', data)
        // 2. scroll to the message
        this.messagesContainerTarget.scrollTo(0, this.messagesContainerTarget.scrollHeight)
      } }
    )
  }

  resetForm(event) {
    event.target.reset()
  }
}
