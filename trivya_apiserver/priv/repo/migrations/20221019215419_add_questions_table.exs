defmodule TrivyaApiserver.Repo.Migrations.AddQuestionsTable do
  use Ecto.Migration

  def change do
    create table(:categories) do
      add :content, :string

      timestamps()
    end

    create table(:questions) do
      add :content, :string
      add :difficulty, :string
      add :content_in_maltese, :string
      add :category_id, references(:categories)

      timestamps()
    end

    create table(:answers) do
      add :content, :string
      add :is_correct, :boolean, default: false, null: false
      add :question_id, references(:questions)
      add :content_in_maltese, :string

      timestamps()
    end

    create table(:facts) do
      add :content, :string
      add :content_in_maltese, :string
      add :question_id, references(:questions)

      timestamps()
    end
  end
end
