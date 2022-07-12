class CommentsController < ApplicationController
   before_action :find_comment
   before_action :authorize_user, only: [:update, :destroy]
    
    def show
        render json: @comment, include: :replies
    end

    def create 
        comment= Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def update
        @comment.update!(comment_params)
        render json: @comment, status: :accepted
    end

    def destroy 
        @comment.destroy!
        head :no_content
    end

    private 
    
    def find_comment 
        @comment=Comment.find_by(id: params[:id])
    end

    def authorize_user
        return if current_user.admin? || current_user == comment.user
        render json: { errors: "You don't have permission to perform that action" }, status: :forbidden
      end
    end

    def comment_params 
        params.permit(:comment)
    end
end
