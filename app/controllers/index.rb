require_relative '../models/api'

require 'json'

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
  user = User.find_by(email: params[:user][:email])
  if user.password == params[:user][:password]
    session[:user_id] = user.id
    erb :index
  else
    redirect '/login'
  end
end

get '/logout' do
  session[:user_id] = nil
  redirect '/'
end

post '/find' do
  "hello world"
  p params[:search_string]
  api =   GoogleMapsAPI.new(params[:search_string])
  p JSON.parse(api.search(params[:search_string]))
  erb :index
end


