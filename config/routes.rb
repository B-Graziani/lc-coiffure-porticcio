Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
   resources :pages, except: :home do
    collection do
      get :blog
    end
  end
  resources :articles
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
