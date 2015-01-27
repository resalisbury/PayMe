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

end
