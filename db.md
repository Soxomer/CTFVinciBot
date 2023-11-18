Installer l'extension mermaid pour visualiser ce graph

`````mermaid
erDiagram
    users ||--o{ solved_ctfs: has
    users {
        int id_discord PK
    }

    solved_ctfs {
        int id PK
        int user_id FK
        int ctf_id FK
        unique user_id_ctf_id
    }

    ctfs ||--o{ solved_ctfs: has
    ctfs {
        int ctfs_id
        string name
        string link
        string description
        int points
        string flag
        int difficulty_id FK
    }

    categories ||--o{ ctfs_categories: belongs
    categories {
        int id
        string name
    }

    difficulty ||--|| ctfs: has
    difficulty {
        int id
        string name
    }

    ctfs_categories }o--|| ctfs: has
    ctfs_categories {
        int id
        int ctf_id FK
        int category_id FK
    }

    hints }o--|| ctfs: has
    hints }o--|| hints: has
    hints {
        int id
        string hint
        int ctf_id FK
        int previous_hint_id FK
    }

    users ||--o{ hints_used: has
    hints_used {
        int id
        int user_id FK
        int hint_id FK
    }

    events {
        TODO TODO
    }

`````
