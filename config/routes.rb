Leela::Application.routes.draw do

  root 'static_pages#index2'

  # get "static_pages/index"
  # get "static_pages/about"
  # get "static_pages/contact"
  # get "static_pages/help"
  # get "static_pages/about2"
  # get "static_pages/blog"
  # get "static_pages/blogdetails"
  # get "static_pages/gallery1"
  # get "static_pages/gallery2"
  # get "static_pages/index2"
  # get "static_pages/index3"
  # get "static_pages/index4"
  # get "static_pages/services"
  # get "static_pages/special"

  match '/', to: 'static_pages#index2', via: 'get'
  match '/about', to: 'static_pages#about', via: 'get'
  match '/contact', to: 'static_pages#contact', via: 'get'
  match '/help', to: 'static_pages#help', via: 'get'
  match '/about2', to: 'static_pages#about2', via: 'get'
  match '/blog', to: 'static_pages#blog', via: 'get'
  match '/blogdetails', to: 'static_pages#blogdetails', via: 'get'
  match '/gallery1', to: 'static_pages#gallery1', via: 'get'
  match '/gallery2', to: 'static_pages#gallery2', via: 'get'
  match '/index1', to: 'static_pages#index1', via: 'get'
  match '/index3', to: 'static_pages#index3', via: 'get'
  match '/index4', to: 'static_pages#index4', via: 'get'
  match '/services', to: 'static_pages#services', via: 'get'
  match '/special', to: 'static_pages#special', via: 'get'
  match '/massages', to: 'static_pages#massages', via: 'get'
  match '/esthetics', to: 'static_pages#esthetics', via: 'get'
  match '/waxing', to: 'static_pages#waxing', via: 'get'
  match '/esthetician', to: 'static_pages#esthetician', via: 'get'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
