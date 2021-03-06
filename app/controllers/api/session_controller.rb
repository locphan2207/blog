class Api::SessionController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    @errors = []
    if @user
      session[:session_token] = @user.session_token
      render :show
    else
      @errors += ['Wrong username/password']
      render :show, status: 404
    end
  end

  def destroy
    if current_user
      current_user.reset_session_token
      session[:session_token] = nil
      render :show
    end
  end
end
