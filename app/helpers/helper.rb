helpers do

  def login?
    if session[:user_id].nil?
      return false
    else
      return true
    end
  end

  def user_id
    return session[:user_id]
  end

end