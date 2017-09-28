require 'rails_helper'

RSpec.describe FetchComics do

  context 'when a vote is given' do

		it 'creates the comic vote on the fly' do
			expect {
				UpVote.perform(123)
			}.to change(ComicVote, :count).by(1)
		end

		context 'and comic vote already exists' do
    	before do
    	  ComicVote.create(comic_id: 123)
    	end

    	it 'increases votes amount if ComicVote exists for the comic_id' do
    	  UpVote.perform(123)

    	  comic_votes = ComicVote.find_by(comic_id: 123)

    	  expect(comic_votes.votes).not_to be_nil
    	end
		end
  end
end
