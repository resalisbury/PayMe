get '/' do

  erb :index
end

get '/users/new' do

  erb :register
end

post '/users' do
  user = User.new(params[:user])
  if user.save
    erb :login
  else
    erb :register
  end
end

get '/login' do

  erb :login
end

post '/sessions' do
  puts params
  user = User.where(email: params[:user][:email])[0]
  if user.password == params[:password]
    session[:user_id] = user.id
    "logged in"
  else
    redirect '/login'
  end
end
