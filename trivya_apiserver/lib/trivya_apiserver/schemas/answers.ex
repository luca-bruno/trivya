defmodule TrivyaApiserver.Schemas.Answer do
  use Ecto.Schema
  import Ecto.Changeset

  schema "answers" do
    field :content, :string
    field :is_correct, :boolean
    field :content_in_maltese, :string
    field :question_id, :binary_id

    timestamps()
  end

  def changeset(question, attrs) do
    question
    |> cast(attrs, [:content, :is_correct, :content_in_maltese, :question_id])
    |> validate_required([:content, :is_correct, :content_in_maltese, :question_id])
  end
end
