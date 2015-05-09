require 'open-uri'
require 'nokogiri'

class PostsController < ApplicationController
  def index
    @posts = Influencer.all[0..2].reduce(Array.new) do |array, influencer|
      parsing = Parsing.new(influencer)
      post = Post.find_or_create_by(content: parsing.freshest_post, influencer: influencer, image_url: parsing.get_twitter_image)
      array << post
    end
  end
end
