require 'comics'

class FetchComic
  include ::UseCase

  attr_reader :result

  def initialize(id, search_params:, comics: Comics)
		@id = id
    @search_params = search_params
    @comics = comics
  end

  def perform
    @result = fetch_comic
  end

  private

  attr_reader :comics

  def fetch_comic
    comics.fetch(@id, @search_params)
  end
end

