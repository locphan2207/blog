class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    user = User.find_by(session_token: session[:session_token])
    return user
  end
end
