class ExercisesController < ApplicationController
  def index
    @exercises_js = Exercise.where(language: "js")
    @exercises_ruby = Exercise.where(language: "ruby")
    @projects_ruby = Project.where(language: "ruby")
  end
end
