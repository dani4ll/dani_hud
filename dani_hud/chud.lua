RegisterNetEvent("hud:updateThings", function(k, v)
  SendNUIMessage({ updatehud = true, cemodifica = k, valoare = v });
end);

Citizen.CreateThread(function()
  while true do
    Citizen.Wait(1000)
    TriggerServerEvent("UwU")
  end
end)

