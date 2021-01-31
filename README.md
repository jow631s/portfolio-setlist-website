#portfolio_setlist_website

docker run -d \
    --name setlist-pg \
    -e POSTGRES_PASSWORD=linekleenexlamp \
    -e POSTGRES_USER=setlist_app \
    -e PGDATA=/var/lib/postgresql/data/pgdata \
    -v /Users/jacobwyrick/pgdata:/var/lib/postgresql/data \
    -p 5432:5432 \
    postgres