trap "kill 0" EXIT

watchman-make --make='./build.sh' -p '**/*.ts' -t build &
ws &

wait
