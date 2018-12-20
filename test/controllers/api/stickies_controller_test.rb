require 'test_helper'

class Api::StickiesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_stickies_index_url
    assert_response :success
  end

  test "should get show" do
    get api_stickies_show_url
    assert_response :success
  end

  test "should get create" do
    get api_stickies_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_stickies_destroy_url
    assert_response :success
  end

  test "should get update" do
    get api_stickies_update_url
    assert_response :success
  end

end
