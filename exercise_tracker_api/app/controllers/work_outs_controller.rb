class WorkOutsController < ApplicationController

  # GET /work_outs
  def index
    @work_outs = WorkOut.all

    render json: @work_outs
  end

  # GET /work_outs/1
  def show
    render json: @work_out
  end

  # POST /work_outs
  def create
    @work_out = WorkOut.new(work_out_params)

    if @work_out.save
      render json: @work_out, status: :created, location: @work_out
    else
      render json: @work_out.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /work_outs/1
  def update
    if @work_out.update(work_out_params)
      render json: @work_out
    else
      render json: @work_out.errors, status: :unprocessable_entity
    end
  end

  # DELETE /work_outs/1
  def destroy
    @work_out.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    ## def set_work_out
    ##   @work_out = WorkOut.find(params[:id])
    ## end

    ## def set_plan
    ##   @plan = Plan.find(params[:plan_id])
    ## end

    # Only allow a trusted parameter "white list" through.
    def work_out_params
      params.require(:work_out).permit(:date, :workout_type, :duration)
    end
end
