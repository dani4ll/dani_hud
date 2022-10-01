do return (function ()
    local Tunnel <const> = module([[vrp]], [[lib/Tunnel]])
    local Proxy <const> = module([[vrp]], [[lib/Proxy]])
    vRP = Proxy.getInterface([[vRP]])
    vRPclient = Tunnel.getInterface([[vRP]], [[p4k_hud]])

    RegisterServerEvent('UwU')
    AddEventHandler("UwU",function()
        local user_id <const> = vRP['getUserId']{source}
        local playerCash, playerBank, playerDiamonds, playerGifts, playersOnline, playerJob <const> = vRP[Config.functieformat]{vRP[Config.functiebanicash]{user_id}}, vRP[Config.functieformat]{vRP[Config.functiebanibanca]{user_id}}, vRP[Config.functieformat]{vRP[Config.functiediamante]{user_id}}, vRP[Config.functieformat]{vRP[Config.functiebanibanca]{user_id}}, GetNumPlayerIndices(), vRP[Config.functiegetjob]{user_id,"job"}

        TriggerClientEvent("hud:updateThings", -1, 'onlinePlayers', playersOnline) 
        if user_id ~= nil and user_id ~= 0 then

            local tabl3 <const> = {
                ['walletMoney'] = playerCash,
                ['bankMoney'] = playerBank,
                ['proCoins'] = playerDiamonds,
                ['gifts'] = playerGifts,
                ['userId'] = user_id,
                ['onlinePlayers'] = playersOnline,
                ['jobDisplay'] = playerJob
            }

            for i, v in pairs(tabl3) do 
                TriggerClientEvent("hud:updateThings", source, i, v) 
            end
        end
    end)

    AddEventHandler("vRP:playerLeave", function(user_id, source)
        TriggerClientEvent("hud:updateThings", -1, 'onlinePlayers', GetNumPlayerIndices()) 
    end)

end)() end