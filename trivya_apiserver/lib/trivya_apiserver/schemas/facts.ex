defmodule TrivyaApiserver.Schemas.Fact do
  use Ecto.Schema
  import Ecto.Changeset

  schema "facts" do
    field :content, :string
    field :content_in_maltese, :string
    field :question_id, :binary_id

    timestamps()
  end

  def changeset(fact, attrs) do
    fact
    |> cast(attrs, [:content, :content_in_maltese, :question_id])
    |> validate_required([:content, :content_in_maltese, :question_id])
  end
end
