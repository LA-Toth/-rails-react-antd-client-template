Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '*path', to: "root#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
