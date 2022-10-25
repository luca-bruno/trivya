defmodule TrivyaApiserver.Schemas.Question do
  use Ecto.Schema
  import Ecto.Changeset

  alias TrivyaApiserver.Schemas.Answer
  alias TrivyaApiserver.Schemas.Category

  schema "questions" do
    field :content, :string
    field :difficulty, :string
    field :content_in_maltese, :string
    field :category_id, :binary_id

    timestamps()

    has_many :answers, Answer
    has_many :categories, Category
  end

  def changeset(question, attrs) do
    question
    |> cast(attrs, [:content, :difficulty, :content_in_maltese, :category_id])
    |> validate_required([:content, :difficulty, :content_in_maltese, :category_id])
  end
end
