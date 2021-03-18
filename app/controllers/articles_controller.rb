class ArticlesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :index, :show, :new, :create, :destroy ]

  def index
    @articles = Article.all
  end

  def show
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      redirect_to blog_pages_path
    else
      redirect_to new_article_path
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to blog_pages_path
  end

  private

  def article_params
    params.require(:article).permit(:title, :description, :photo)
  end
end
