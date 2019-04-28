require 'test_helper'

class ColorpickerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get colorpicker_index_url
    assert_response :success
  end

end
