get '/' do

  erb :index
end

get '/users/new' do

  erb :register
end

post '/users' do
  "Hello World"
end

get '/login' do

end
