alter table trips add column if not exists is_featured boolean not null default false;
alter table trips add column if not exists qte integer;
