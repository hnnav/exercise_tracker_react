require 'test_helper'

class WorkOutsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @work_out = work_outs(:one)
  end

  test "should get index" do
    get work_outs_url, as: :json
    assert_response :success
  end

  test "should create work_out" do
    assert_difference('WorkOut.count') do
      post work_outs_url, params: { work_out: { date: @work_out.date, duration: @work_out.duration, type: @work_out.type } }, as: :json
    end

    assert_response 201
  end

  test "should show work_out" do
    get work_out_url(@work_out), as: :json
    assert_response :success
  end

  test "should update work_out" do
    patch work_out_url(@work_out), params: { work_out: { date: @work_out.date, duration: @work_out.duration, type: @work_out.type } }, as: :json
    assert_response 200
  end

  test "should destroy work_out" do
    assert_difference('WorkOut.count', -1) do
      delete work_out_url(@work_out), as: :json
    end

    assert_response 204
  end
end
