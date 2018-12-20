Rails.application.routes.draw do
  namespace :api do
    resources :stickies
  end
end
