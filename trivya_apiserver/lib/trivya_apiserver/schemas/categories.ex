defmodule TrivyaApiserver.Schemas.Category do
  use Ecto.Schema
  import Ecto.Changeset

  alias TrivyaApiserver.Schemas.Question

  schema "categories" do
    field :content, :string
    field :question_id, :binary_id

    timestamps()
  end

  def changeset(category, attrs) do
    category
    |> cast(attrs, [:content, :question_id])
    |> validate_required([:content, :question_id])
  end
end
