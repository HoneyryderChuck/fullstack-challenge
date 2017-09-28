Rails.application.routes.draw do
  namespace :api , defaults: { format: :json } do
   	get 'comics/upvotes' => 'comics#upvotes'
   	put 'comics/:comic_id/upvote' => 'comics#upvote'
		resources :comics, only: [:index, :show]
  end
end
