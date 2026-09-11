alter table trips add column if not exists spots_left integer default null;
alter table trips add column if not exists total_spots integer default null;
