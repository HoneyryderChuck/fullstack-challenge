require 'rails_helper'

RSpec.describe FetchComic do
	let(:comic) { class_double('Comic') }
	let(:api_result) { { title: 'x-man'} }
	describe "#perform" do
		it 'returns comic for the given comic id' do
			allow(comic).to receive(:fetch).with(1, instance_of(Hash))
																		 .and_return(api_result)

			subject = described_class.perform(1, search_params: {}, comics: comic)
			expect(subject.result).to eq(api_result)
		end
	end
end
