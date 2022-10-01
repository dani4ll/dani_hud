fx_version 'cerulean'
games { 'gta5' }
author 'dani4l'
lua54 'Cum sa nu'
client_scripts {
	"@vrp/client/Tunnel.lua",
	"@vrp/client/Proxy.lua",
    "chud.lua"
} 

server_scripts {
	"@vrp/lib/utils.lua",
    "shud.lua",
    "config.lua"
}

ui_page 'ui/index.html'
files { 'ui/*.*' }