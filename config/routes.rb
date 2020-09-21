Rails.application.routes.draw do
  root to: 'pages#home'
  get 'hire_me', to: 'pages#hire_me'
  resources :exercises

end
