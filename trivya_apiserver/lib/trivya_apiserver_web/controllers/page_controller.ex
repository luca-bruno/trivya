defmodule TrivyaApiserverWeb.PageController do
  use TrivyaApiserverWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
