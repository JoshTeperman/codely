class ChallengesController < ApplicationController
  def index
    @challenges = Challenge.all
  end

  def create
    p 'post'
    p params
  end
end
