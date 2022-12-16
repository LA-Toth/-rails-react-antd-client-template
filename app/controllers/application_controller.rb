class ApplicationController < ActionController::API
  def fallback_index_html
    f = File.open("#{Rails.root}/public/index.html")
    self.response_body = f.read
    f.close
  end
end
