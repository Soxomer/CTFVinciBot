`````mermaid
erDiagram
    users ||--o{ solved_ctfs : has
    users {
        int id_discord PK 
    }
    
    solved_ctfs {
        int id PK
        int user_id FK
        int ctf_id FK
        unique user_id_ctf_id
    }
    
    ctfs ||--o{ solved_ctfs : has
    ctfs {
        int id
        int value
        string link
        string solution
    }
    
    events {
        TODO TODO
    }
`````
