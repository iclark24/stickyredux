class Api::StickiesController < ApplicationController
  before_action :set_sticky, only: [:show, :update, :destroy]

  def index
    render json: Sticky.all
  end

  def show
    render json: @sticky
  end

  def create
    sticky = Sticky.new(sticky_params)

    if sticky.save
      render json: sticky
    else
      render json: sticky.errors, status: 422
    end
  end

  def destroy
    @sticky.destroy
  end

  def update
    if @sticky.update(sticky_params)
      render json: @sticky
    else
      render json: @sticky.errors, status: 422
    end
  end

  private
  def set_sticky
    @sticky = Sticky.find(params[:id])
  end

  def sticky_params
    params.require(:sticky).permit(:title, :body, :color, :complete)
  end

end
