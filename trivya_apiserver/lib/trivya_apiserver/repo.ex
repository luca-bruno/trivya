defmodule TrivyaApiserver.Repo do
  use Ecto.Repo,
    otp_app: :trivya_apiserver,
    adapter: Ecto.Adapters.Postgres
end
