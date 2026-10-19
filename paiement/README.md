# Page de retour 221 Pay

Page hébergée sur **https://jetjet.tech/paiement/retour**

## Utilisation

Cette page est automatiquement ouverte par 221 Pay après un paiement Wave ou Orange Money effectué depuis l'application JET-JET Windows.

## Fonctionnement

1. L'utilisateur paie via Wave/Orange Money dans le navigateur
2. 221 Pay redirige vers cette page avec les paramètres de transaction
3. La page vérifie automatiquement le statut via l'API backend
4. L'utilisateur voit le résultat (confirmé/en attente/échoué)
5. Il retourne manuellement dans l'application Windows

## Paramètres URL attendus

La page peut recevoir ces paramètres depuis 221 Pay:
- `payment_id` - ID du paiement 221 Pay
- `transaction_id` - ID de la transaction
- `merchant_reference` - Référence marchande (order_id JET-JET)

Exemple:
```
https://jetjet.tech/paiement/retour?payment_id=abc123&merchant_reference=order-456
```

## API Backend

La page appelle:
```
POST https://oxpnxbzlhkkvjcctcsfl.supabase.co/functions/v1/check-221-payment-public
```

Cette API:
- Est publique (pas d'authentification requise)
- Vérifie le statut auprès de 221 Pay
- Met à jour la base de données automatiquement
- Retourne le statut actuel de la transaction

## États possibles

- **Confirmé** ✓ - Le paiement est validé
- **En attente** ⏳ - Le paiement est en cours de traitement
- **Échoué** ✕ - Le paiement a été refusé ou a expiré
- **Erreur** ⚠ - Impossible de vérifier le statut

## Déploiement

Le site est hébergé sur GitHub Pages:
```bash
git add paiement/retour.html
git commit -m "Update 221 Pay return page"
git push origin main
```

GitHub Pages se met à jour automatiquement en 1-2 minutes.

## Test local

Pour tester localement:
```bash
# Ouvrir dans un navigateur avec des paramètres de test
open retour.html?merchant_reference=test-order-123
```

## Documentation complète

Voir `INTEGRATION_221_PAY_RETOUR.md` à la racine du projet pour la documentation complète.
