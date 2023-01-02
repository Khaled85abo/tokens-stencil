import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'comment-input',
  styleUrl: './comment-input.css',
  shadow: false,
})
export class CommentInput {
  @State() commentText: string = '';
  @State() texts: string[] = [];
  @Prop() postId: number;
  @Prop() parentCommentId: number | undefined;

  addNewComment(e: Event) {
    e.preventDefault();

    console.log('the comment is :', this.commentText);

    this.texts = [...this.texts, this.commentText];
    this.commentText = '';
  }

  handleInput(e: Event) {
    this.commentText = (e.target as HTMLInputElement).value;
  }
  render() {
    return (
      <div class="comment-input-wrapper">
        <div class="comment-input">
          <img src="https://source.unsplash.com/7YVZYZeITc8/w=30" alt="" height="50px" />
          <form onSubmit={this.addNewComment.bind(this)}>
            <div class="input-wrapper">
              <input type="text" placeholder="Kommentera" name="messageText" value={this.commentText} onChange={this.handleInput.bind(this)} />
              <button class="forward-arrow-div">
                <i class="i-arrow-forward"></i>
              </button>
            </div>
          </form>
        </div>
        {this.texts.map((text: string, key: number) => (
          <p key={key}>{text}</p>
        ))}
      </div>
    );
  }
}
