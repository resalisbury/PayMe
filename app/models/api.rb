require 'httparty'

class GoogleMapsAPI
  include HTTParty

  base_uri "https://maps.googleapis.com/maps/api/place/textsearch/json"

  def initialize(search_string)
    @params = { query: { key: "AIzaSyAjeCLtRtyVq0nEIC6ImWQ7GDCKUM-0RZc"} }
  end

  def search(search_string)
    @params[:query][:query] = search_string
    response = self.class.get('', @params)
    response.body
  end
end
